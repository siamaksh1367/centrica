using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("SalePerson")]
    public class SalePersonQuery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<DistrictCommand> Districts { get; set; }
        public ICollection<StoreQuery> Stores { get; set; }
    }

    public class SalePersonCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
