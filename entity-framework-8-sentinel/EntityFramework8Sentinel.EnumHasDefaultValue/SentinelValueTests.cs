namespace EntityFramework8Sentinel.EnumHasDefaultValue
{
    public class SentinelValueTests
    {
        [Test]
        public void EnumZeroValueUsed_When_HasDefaultValueIsSetToDifferentValue()
        {
            using var context = new AppDbContext();
            var user = new UserAccount();
            context.UserAccounts.Add(user);

            context.SaveChanges();

            var inserted = context.UserAccounts.First();
            Assert.That(
                inserted.Status,
                Is.EqualTo(ClientStatus.Inactive),
                "Even though we configured ClientStatus.Inactive as default value in AppDbContext, it is not the case! "
                    + "Entity Frameworks uses ClientStatus.Active, because it has value of 0 (default CLR value for enums)"
            );
        }
    }
}
