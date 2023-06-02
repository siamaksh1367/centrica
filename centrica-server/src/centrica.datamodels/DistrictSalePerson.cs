namespace centrica.datamodels
{

    public class DistrictSalePerson
    {
        public int Id { get; set; }
        public SalePerson SalePerson { get; set; }
        public District District { get; set; }
        public int SalePersonId { get; set; }
        public int DistrictId { get; set; }
        public bool IsPrimary { get; set; }
    }
}
