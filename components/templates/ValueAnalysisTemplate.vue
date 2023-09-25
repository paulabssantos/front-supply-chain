<template>
  <div class="content">
    <ValueAnalysisHeader
      :code="code"
      :description="description"
      :type="type"
    ></ValueAnalysisHeader>
    <Divider></Divider>

    <SectionHeader
      :title="'Editar valores'"
      :description="'Informe os valores repassados pelos fornecedores'"
    ></SectionHeader>

    <ValueAnalysisTable
      :productAnalisysValueRequest="productAnalisysValueRequest"
      :suppliers="suppliers"
      @favoriteSuppliers="
        (payload) => {
          favoriteSuppliers = payload;
        }
      "
      @valueAnalysis="
        (payload) => {
          valueAnalysis = payload;
        }
      "
    ></ValueAnalysisTable>
    <Divider></Divider>

    <SectionHeader
      :title="'Anexos'"
      :description="'Insira as cotações enviadas'"
    ></SectionHeader>

    <QuotationUpload></QuotationUpload>
    <Divider></Divider>

    <SectionHeader
      :title="'Fornecedores selecionados'"
      :description="'Vencedores escolhidos por item e análise da última compra'"
    ></SectionHeader>

    <FavoriteSupplierTable
      :favoriteSuppliers="favoriteSuppliers"
    ></FavoriteSupplierTable>
    <Divider></Divider>

    <MainButtons
      :favoriteSuppliers="favoriteSuppliers"
      @show-modal="changeModalVisibility"
    ></MainButtons>

    <Modal
      v-if="showModal"
      @create-purchase-order="
        (payload) => {
          createPurchaseOrder(payload);
        }
      "
      @show-modal="(payload) => (showModal = payload)"
      @show-repproval-modal="(payload) => (showRepprovalModal = payload)"
    ></Modal>
    <RepprovalModal
      :code="code"
      :description="description"
      :type="type"
      v-if="showRepprovalModal"
      @repprove-purchase-order="
        (payload) => {
          createPurchaseOrder(payload);
        }
      "
      @show-repproval-modal="(payload) => (showRepprovalModal = payload)"
    ></RepprovalModal>
  </div>
</template>

<script>
import ValueAnalysisHeader from "~/components/organisms/ValueAnalysisHeader.vue";
import Divider from "~/components/atoms/Divider.vue";
import QuotationUpload from "~/components/organisms/QuotationUpload.vue";
import ValueAnalysisTable from "~/components/organisms/ValueAnalysisTable.vue";
import FavoriteSupplierTable from "~/components/organisms/FavoriteSupplierTable.vue";
import SectionHeader from "~/components/molecules/SectionHeader.vue";
import MainButtons from "~/components/molecules/MainButtons.vue";
import Modal from "~/components/organisms/Modal.vue";
import RepprovalModal from "~/components/organisms/RepprovalModal.vue";

import httpQuotation from "~/services/quotation/index";
import httpSupplier from "~/services/suppliers/index";
import httpValueAnalisys from "~/services/valueAnalysis/index";
import httpPurchaseOrder from "~/services/purchaseOrder/index";

export default {
  data() {
    return {
      valueAnalysis: [],
      showRepprovalModal: false,
      showModal: false,
      suppliers: [],
      favoriteSuppliers: [],
      code: "",
      description: "",
      type: "",
      productAnalisysValueRequest: [],
    };
  },
  layout: "default",
  components: {
    ValueAnalysisHeader,
    Divider,
    ValueAnalysisTable,
    QuotationUpload,
    FavoriteSupplierTable,
    SectionHeader,
    MainButtons,
    Modal,
    RepprovalModal,
  },
  methods: {
    changeModalVisibility() {
      if (this.favoriteSuppliers.length <= 0) {
        this.$toast.error(
          "É preciso selecionar pelo menos um fornecedor para o produto"
        );
      } else {
        this.showModal = true;
      }
    },
    async createPurchaseOrder(payload) {
      try {
        const createdAnalysis = await httpValueAnalisys.CreateValueAnalysis(
          this.valueAnalysis
        );
        let analysisIds = [];
        await createdAnalysis.data.forEach((createdAnalisys) => {
          analysisIds.push(createdAnalisys.id);
        });

        await httpPurchaseOrder.CreatePurchaseOrder(
          Object.assign(payload, { valueAnalysisId: analysisIds })
        );
        if (payload.status == 1) {
          this.$toast.success("Criado pedido para o Protheus!");
          this.showModal = false;
        } else if ((payload.status = 2)) {
          this.$toast.success("Pedido reprovado");
          this.showRepprovalModal = false;
        }
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
    },
  },
  async created() {
    try {
      const quotationData = await httpQuotation.ListQuotation(1);
      this.code = String(quotationData.data.id);
      this.description = quotationData.data.description;
      this.type = quotationData.data.type;
      this.productAnalisysValueRequest =
        quotationData.data.productAnalisysValueRequests;
      const suppliersData = await httpSupplier.ListSuppliers();
      this.suppliers = suppliersData.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
}
</style>
