using centrica.configurations;
using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;

namespace centrica.repository.Generic
{
    public class DapperContext
    {
        private readonly string _connectionString;

        public DapperContext(IOptions<ConnectionStrings> config)
        {
            _connectionString = config.Value.DefaultConnection;
        }
        public IDbConnection CreateConnection()
            => new SqlConnection(_connectionString);
    }
}