using System;
using ServiceStack;
using Jamstacks.ServiceModel;

namespace Jamstacks.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = $"Hello, {request.Name}!" };
        }
    }
}
