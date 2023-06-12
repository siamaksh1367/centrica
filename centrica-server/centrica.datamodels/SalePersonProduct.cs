using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("SalePersonProduct")]
    public class SalePersonProductQuery
    {
        public int Id { get; set; }
        public int SalePersonId { get; set; }
        public ProductQuery Product { get; set; }
        public SalePersonQuery SalePerson { get; set; }
        public int ProductId { get; set; }
        public float Available { get; set; }
    }
    [Table("SalePersonProduct")]
    public class SalePersonProductCommand
    {
        public int Id { get; set; }
        public int SalePersonId { get; set; }
        public int ProductId { get; set; }
        public float Available { get; set; }
    }
}
