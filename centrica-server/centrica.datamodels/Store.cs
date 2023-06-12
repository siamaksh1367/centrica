using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("Store")]
    public class StoreQuery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DistrictCommand District { get; set; }
        public int DistrictId { get; set; }
        public ICollection<ProductStoreSellQuery> ProductStoreSells { get; set; }
    }
    [Table("Store")]
    public class StoreCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DistrictId { get; set; }
    }
}
