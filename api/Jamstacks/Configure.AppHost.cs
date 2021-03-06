using Funq;
using ServiceStack;
using Jamstacks.ServiceInterface;

[assembly: HostingStartup(typeof(Jamstacks.AppHost))]

namespace Jamstacks;

public class AppHost : AppHostBase, IHostingStartup
{
    public AppHost() : base("Jamstacks", typeof(MyServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
        });

        Plugins.Add(new SpaFeature {
            EnableSpaFallback = true
        });
        Plugins.Add(new CorsFeature(allowOriginWhitelist:new[]{ 
            "http://localhost:5000",
            "http://localhost:3000",
            "https://localhost:5001",
            "https://" + Environment.GetEnvironmentVariable("DEPLOY_CDN")
        }, allowCredentials:true));
    }

    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => 
            services.ConfigureNonBreakingSameSiteCookies(context.HostingEnvironment))
        .Configure(app => {
            if (!HasInit) 
                app.UseServiceStack(new AppHost());
        });
}
