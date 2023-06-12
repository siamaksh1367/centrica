using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface ITransitionPeriodRepository : IGenericRepository<TransitionPeriod, TransitionPeriod> { }
    public class TransitionPeriodRepository : AbstractRepository<TransitionPeriod, TransitionPeriod>, ITransitionPeriodRepository
    {
        public TransitionPeriodRepository(DapperContext context) : base(context)
        {
        }
    }


}

