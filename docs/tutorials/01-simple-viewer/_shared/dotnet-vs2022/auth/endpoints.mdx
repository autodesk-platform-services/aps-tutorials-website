Now let's add a first endpoint to our server. Create an `AuthController.cs` file under the `Controllers`
subfolder with the following content:

```csharp title="Controllers/AuthController.cs"
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    public record AccessToken(string access_token, long expires_in);

    private readonly ForgeService _forgeService;

    public AuthController(ForgeService forgeService)
    {
        _forgeService = forgeService;
    }

    [HttpGet("token")]
    public async Task<AccessToken> GetAccessToken()
    {
        var token = await _forgeService.GetPublicToken();
        return new AccessToken(
            token.AccessToken,
            (long)Math.Round((token.ExpiresAt - DateTime.UtcNow).TotalSeconds)
        );
    }
}
```

The controller will receive the instance of `ForgeService` through ASP.NET's
[Dependency injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0),
and it will handle requests to `/api/auth/token` by generating a new access token
and sending it back to the client as a JSON payload.
