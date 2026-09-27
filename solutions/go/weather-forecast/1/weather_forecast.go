//Package weather has 2 exportable variables and a function.
package weather

var (
// CurrentCondition intializes exportable string for function.
	CurrentCondition string
// CurrentLocation intializes exportable string for function.
	CurrentLocation  string
)
// Forecast function takes in strings(city and  condition) and returns a string concatinating both.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
