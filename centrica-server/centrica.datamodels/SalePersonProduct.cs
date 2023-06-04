using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("SalePersonProduct")]
    public class SalePersonProduct
    {
        public int Id { get; set; }
        public int SalePersonId { get; set; }
        public Product Product { get; set; }
        public SalePerson SalePerson { get; set; }
        public int ProductId { get; set; }
        public float Available { get; set; }
    }
}
