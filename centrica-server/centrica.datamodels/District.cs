using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("District")]
    public class DistrictCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    [Table("District")]
    public class DistrictQuery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<SalePersonQuery> SalePeople { get; set; } = new List<SalePersonQuery>();
        public ICollection<StoreQuery> Stores = new List<StoreQuery>();
    }

}
