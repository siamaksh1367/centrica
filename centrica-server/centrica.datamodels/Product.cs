using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("Product")]
    public class ProductQuery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<SalePersonQuery> SalePeople { get; set; }
    }
    [Table("Product")]
    public class ProductCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
