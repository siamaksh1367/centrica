using System.ComponentModel.DataAnnotations.Schema;

namespace centrica.datamodels
{
    [Table("TransitionPeriod")]
    public class TransitionPeriod
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsValid { get; set; }
    }
}
