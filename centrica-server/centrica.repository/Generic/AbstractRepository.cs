using centrica.configurations;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;

namespace centrica.repository.Generic
{
    public class AbstractRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly ConnectionStrings _config;

        public AbstractRepository(IOptions<ConnectionStrings> config)
        {
            _config = config.Value;
        }
        public async Task<int> AddAsync(T entity)
        {
            using (SqlConnection connection = new SqlConnection(_config.DefaultConnection))
            {
                return await connection.InsertAsync(entity);
            }
        }

        public async Task<bool> DeleteAsync(T entity)
        {
            using (SqlConnection connection = new SqlConnection(_config.DefaultConnection))
            {
                return await connection.DeleteAsync(entity);
            }
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            using (SqlConnection connection = new SqlConnection(_config.DefaultConnection))
            {
                return await connection.GetAllAsync<T>();
            }
        }

        public async Task<T> GetByIdAsync(int id)
        {
            using (SqlConnection connection = new SqlConnection(_config.DefaultConnection))
            {
                return await connection.GetAsync<T>(id);
            }
        }

        public async Task<bool> UpdateAsync(T entity)
        {
            using (SqlConnection connection = new SqlConnection(_config.DefaultConnection))
            {
                return await connection.UpdateAsync(entity);
            }
        }
    }
}