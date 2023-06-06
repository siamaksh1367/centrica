using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("District")]
    public class District
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<SalePerson> SalePeople { get; set; }
        public ICollection<Store> Stores { get; set; }
    }

}
