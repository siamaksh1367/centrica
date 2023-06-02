namespace centrica.datamodels
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<SalePersonProduct> SalePersonProducts { get; set; }
    }
}
