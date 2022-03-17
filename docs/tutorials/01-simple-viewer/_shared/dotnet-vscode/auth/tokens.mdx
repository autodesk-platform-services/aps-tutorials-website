Create a `ForgeService.cs` file under the `Models` subfolder. That is where we will be implementing
all the Forge-specific logic that will be used in different areas of our server application. Let's
start by adding the following code to the file:

```csharp title="Models/ForgeService.cs"
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Autodesk.Forge;
using Autodesk.Forge.Client;
using Autodesk.Forge.Model;

public record Token(string AccessToken, DateTime ExpiresAt);

public class ForgeService
{
    private readonly string _clientId;
    private readonly string _clientSecret;
    private Token _internalTokenCache;
    private Token _publicTokenCache;

    public ForgeService(string clientId, string clientSecret, string bucket = null)
    {
        _clientId = clientId;
        _clientSecret = clientSecret;
    }

    private async Task<Token> GetToken(Scope[] scopes)
    {
        dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);
        return new Token(auth.access_token, DateTime.UtcNow.AddSeconds(auth.expires_in));
    }

    public async Task<Token> GetPublicToken()
    {
        if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)
            _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });
        return _publicTokenCache;
    }

    private async Task<Token> GetInternalToken()
    {
        if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)
            _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });
        return _internalTokenCache;
    }
}
```

The helper class takes the credentials of a Forge application, and creates two authentication clients,
one for internal use (giving us read/write access to the Data Management buckets and objects), and one
for public use (only allowing access to the translation outputs from the Model Derivative service),
and a couple of methods for generating the corresponding tokens for us.

Next, let's update our `Startup.cs` file to make a singleton instance of the `ForgeService` class
available to our server application:

```csharp title="Startup.cs"
using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");
        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");
        var ForgeBucket = Environment.GetEnvironmentVariable("FORGE_BUCKET"); // Optional
        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret))
        {
            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID or FORGE_CLIENT_SECRET.");
        }
        // highlight-start
        services.AddSingleton<ForgeService>(new ForgeService(ForgeClientID, ForgeClientSecret, ForgeBucket));
        // highlight-end
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        app.UseHttpsRedirection();
        app.UseDefaultFiles();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
```
