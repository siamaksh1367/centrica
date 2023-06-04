using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("Store")]
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public District District { get; set; }
        public int DistrictId { get; set; }
        public ICollection<ProductStoreSell> ProductStoreSells { get; set; }
    }
}
