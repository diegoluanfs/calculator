using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CalculatorController : ControllerBase
{
    [HttpGet("add")]
    public IActionResult Add(double num1, double num2)
    {
        return Ok(new { result = num1 + num2 });
    }

    [HttpGet("subtract")]
    public IActionResult Subtract(double num1, double num2)
    {
        return Ok(new { result = num1 - num2 });
    }

    [HttpGet("multiply")]
    public IActionResult Multiply(double num1, double num2)
    {
        return Ok(new { result = num1 * num2 });
    }

    [HttpGet("divide")]
    public IActionResult Divide(double num1, double num2)
    {
        if (num2 == 0)
            return BadRequest("Division by zero is not allowed.");
        return Ok(new { result = num1 / num2 });
    }
}
