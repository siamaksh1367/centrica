using centrica.datamodels;
using centrica.repository.Generic;
using Dapper;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IDistrictSalePersonRepository : IGenericRepository<DistrictSalePersonCommand, DistrictSalePersonQuery>
    {
        Task<IEnumerable<SalePersonQuery>> GetSalePersonWithDistrictId(int ditrictId);
    }
    public class DistrictSalePersonRepository : AbstractRepository<DistrictSalePersonCommand, DistrictSalePersonQuery>, IDistrictSalePersonRepository
    {
        public DistrictSalePersonRepository(DapperContext context) : base(context)
        {
        }

        public async Task<IEnumerable<SalePersonQuery>> GetSalePersonWithDistrictId(int ditrictId)
        {
            var query = "SELECT * FORM DistrictSalePerson As DS " +
                         "LEFT OUTER JOIN SalePerson AS SP" +
                         "ON DS.SalePersonId==SP.ID" +
                         "WHERE DS.Id=@DIstrictID";
            var parameters = new DynamicParameters();
            parameters.Add("DIstrictID", ditrictId);
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<SalePersonQuery>(query, parameters);
            }
        }
    }
}
