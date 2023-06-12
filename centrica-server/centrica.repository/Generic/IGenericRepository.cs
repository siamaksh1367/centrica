namespace centrica.repository.Generic
{
    public interface IGenericRepository<TCommand, SQuery> where TCommand : class where SQuery : class
    {
        Task<int> AddAsync(TCommand entity);
        Task<bool> DeleteAsync(SQuery entity);
        Task<IEnumerable<SQuery>> GetAllAsync();
        Task<TCommand> GetByIdAsync(int id);
        Task<bool> UpdateAsync(TCommand entity);
    }
}