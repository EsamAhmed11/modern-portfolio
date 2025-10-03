namespace PortfolioAPI.Core.Entities
{
    public class Skill
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public int ProficiencyLevel { get; set; }
        public string IconUrl { get; set; }
        public int Order { get; set; }
    }
}