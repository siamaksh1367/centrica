using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface ITransitionPeriodRepository : IGenericRepository<TransitionPeriod> { }
    public class TransitionPeriodRepository : AbstractRepository<TransitionPeriod>, ITransitionPeriodRepository
    {
        public TransitionPeriodRepository(IOptions<DataBaseConfiguration> config) : base(config)
        {
        }
    }


}

