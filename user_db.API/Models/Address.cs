namespace user_db.API.Models;

public class Address
{
    public int Id { get; set; }
    public string? Street { get; set; }
    public int StreetNo { get; set; }
    public int PostalCode { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
    public int UserId { get; set; }
}