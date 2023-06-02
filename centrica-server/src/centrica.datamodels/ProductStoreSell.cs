namespace centrica.datamodels
{
    public class ProductStoreSell
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public Store Store { get; set; }
        public int SalePersonProductId { get; set; }
        public SalePersonProduct SalePersonProduct { get; set; }
        public DateTime SellDate { get; set; }
        public float Quantity { get; set; }
    }
}
