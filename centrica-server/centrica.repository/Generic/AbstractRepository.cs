using Dapper.Contrib.Extensions;

namespace centrica.repository.Generic
{
    public class AbstractRepository<TCommand, SQuery> : IGenericRepository<TCommand, SQuery> where TCommand : class where SQuery : class
    {
        protected readonly DapperContext _context;
        public AbstractRepository(DapperContext context)
        {
            _context = context;
        }

        public async Task<int> AddAsync(TCommand entity)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.InsertAsync(entity);
            }
        }

        public async Task<bool> DeleteAsync(SQuery entity)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.DeleteAsync(entity);
            }
        }


        public async Task<IEnumerable<SQuery>> GetAllAsync()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.GetAllAsync<SQuery>();
            }
        }

        public async Task<SQuery> GetByIdAsync(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.GetAsync<SQuery>(id);
            }
        }

        public async Task<bool> UpdateAsync(TCommand entity)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.UpdateAsync(entity);
            }
        }

        Task<TCommand> IGenericRepository<TCommand, SQuery>.GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}