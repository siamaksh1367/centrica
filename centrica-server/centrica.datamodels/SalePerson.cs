using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("SalePerson")]
    public class SalePerson
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<District> Districts { get; set; }
        public ICollection<Store> Stores { get; set; }
    }
}
