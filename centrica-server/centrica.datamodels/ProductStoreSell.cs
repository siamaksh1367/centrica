using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("ProductStoreSell")]
    public class ProductStoreSellQuery
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public StoreQuery Store { get; set; }
        public int SalePersonProductId { get; set; }
        public SalePersonProductQuery SalePersonProduct { get; set; }
        public DateTime SellDate { get; set; }
        public float Quantity { get; set; }
    }

    public class ProductStoreSellCommand
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public int SalePersonProductId { get; set; }
        public DateTime SellDate { get; set; }
        public float Quantity { get; set; }
    }
}
