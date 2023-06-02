using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IDistrictRepository : IGenericRepository<District> { }
    public class DistrictRepository : AbstractRepository<District>, IDistrictRepository
    {
        public DistrictRepository(IOptions<DataBaseConfiguration> config) : base(config)
        {
        }
    }
}
