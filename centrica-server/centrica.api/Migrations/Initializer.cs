using centrica.configurations;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;

namespace centrica.api.Migrations
{
    public class Initializer
    {
        private readonly ConnectionStrings _config;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private string databaseName = "Centrica";

        public Initializer(IOptions<ConnectionStrings> config, IWebHostEnvironment webHostEnvironment)
        {
            _config = config.Value;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task Init()
        {
            var notExisted = await DBExist();
            if (notExisted)
            {
                await CreateDB();
                await RunScript();
            }
        }
        private async Task<bool> DBExist()
        {
            using (SqlConnection connection = new SqlConnection(_config.Master))
            {
                Console.WriteLine("DBExist");
                Console.WriteLine(_config.Master);
                Console.WriteLine(_config.DefaultConnection);

                connection.Open();
                var CheckCommand = new SqlCommand($"SELECT COUNT(*) FROM sys.databases WHERE name = '{databaseName}'", connection);
                var res = Convert.ToInt32(await CheckCommand.ExecuteScalarAsync()) == 0;
                connection.Close();
                return res;
            }
        }

        private async Task CreateDB()
        {
            using (SqlConnection connection = new SqlConnection(_config.Master))
            {
                Console.WriteLine("CreateDB");
                Console.WriteLine(_config.Master);
                Console.WriteLine(_config.DefaultConnection);
                connection.Open();
                var CreateCommand = new SqlCommand("CREATE DATABASE[Centrica]", connection);
                await CreateCommand.ExecuteNonQueryAsync();
                connection.Close();
            }
        }
        private async Task RunScript()
        {
            using (SqlConnection connection = new SqlConnection(_config.DefaultConnection))
            {
                Console.WriteLine("RunScript");
                Console.WriteLine(_config.Master);
                Console.WriteLine(_config.DefaultConnection);
                connection.Open();
                var command = await File.ReadAllTextAsync(Path.Combine(_webHostEnvironment.ContentRootPath, "Migrations/init.sql"));
                var runCommand = new SqlCommand(command, connection);
                await runCommand.ExecuteNonQueryAsync();
                connection.Close();
            }
        }
    }
}
