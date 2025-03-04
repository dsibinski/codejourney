using A.EnumHasDefaultValue.Db;
using A.EnumHasDefaultValue.Models;

namespace A.EnumHasDefaultValue
{
    public class SentinelValueTests
    {
        [Test]
        public void EnumZeroValue_AlwaysUsed_IgnoringHasDefaultValue()
        {
            using var context = new AppDbContext();
            var user = new UserAccount();
            context.UserAccounts.Add(user);
            context.SaveChanges();
        
            var inserted = context.UserAccounts.First();
            Assert.That(inserted.Status, Is.EqualTo(StatusType.Inactive));
        }
    }
}