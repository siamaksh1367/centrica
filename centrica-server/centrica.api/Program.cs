using AutoMapper;
using centrica.api;
using centrica.api.Migrations;
using centrica.configurations;
using centrica.services;
using Serilog;
using static centrica.serviceRegistration.ServiceRegistration;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json")
    .AddEnvironmentVariables()
    .Build();

IMapper mapper = AutoMapperConfig.Initialize();
builder.Host.UseSerilog((context, configuration) => configuration.MinimumLevel.Information().WriteTo.Console());

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.RegisterServices();
builder.Services.AddScoped<Initializer, Initializer>();
builder.Services.Configure<ConnectionStrings>(builder.Configuration.GetSection("ConnectionStrings"));
builder.Services.AddTransient<GlobalExceptionHandlingMiddleware>();
var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var serv = scope.ServiceProvider.GetRequiredService<Initializer>();
    await serv.Init();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseSerilogRequestLogging();
app.UseAuthorization();
app.UseMiddleware<GlobalExceptionHandlingMiddleware>();
app.UseCors("AllowOrigin");
app.MapControllers();
app.Run();
