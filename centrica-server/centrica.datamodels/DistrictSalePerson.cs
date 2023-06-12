using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("DistrictSalePerson")]
    public class DistrictSalePersonQuery
    {
        public int Id { get; set; }
        public SalePersonQuery SalePerson { get; set; }
        public DistrictCommand District { get; set; }
        public int SalePersonId { get; set; }
        public int DistrictId { get; set; }
        public bool IsPrimary { get; set; }
    }
    [Table("DistrictSalePerson")]
    public class DistrictSalePersonCommand
    {
        public int Id { get; set; }
        public int SalePersonId { get; set; }
        public int DistrictId { get; set; }
        public bool IsPrimary { get; set; }
    }
}
