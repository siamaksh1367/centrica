using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("SalePerson")]
    public class SalePerson
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<DistrictSalePerson> DistrictSalePersons { get; set; }
        public ICollection<SalePersonProduct> SalePersonProducts { get; set; }
    }
}
