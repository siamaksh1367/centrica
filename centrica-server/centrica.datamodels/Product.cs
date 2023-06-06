using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("Product")]
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<SalePerson> SalePeople { get; set; }
    }
}
