using EF8Sentinel.Db;
using EF8Sentinel.Models;

namespace EF8Sentinel;

public class SentinelValueTests
{
    [Test]
    public void DefaultValue_NotUsed_WhenEnumHasNoZero()
    {
        using var context = new AppDbContext();
        var user = new UserAccount();
        context.UserAccounts.Add(user);
        context.SaveChanges();
        
        var inserted = context.UserAccounts.First();
        Assert.That(inserted.Status, Is.EqualTo(StatusType.Inactive));
    }
}