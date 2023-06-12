using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace centrica.api
{

    public static class RequestBodyExtensions
    {
        public static T ParseJsonToObject<T>(this string value)
        {
            try
            {
                var json = JsonConvert.DeserializeObject(value);
                var obj = JsonConvert.DeserializeObject<T>(json.ToString());
                return obj;
            }
            catch (Exception e)
            {
                throw new ArgumentException("payload is not convertable to the desired type", e);
            }
        }
    }
}
