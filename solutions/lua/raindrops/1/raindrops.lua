return function(n)
  local output = ""
    if n % 3 == 0 then
        output = output .. "Pling"
    end
    if n % 5 == 0 then
        output = output .. "Plang"
    end
    if n % 7 == 0 then
        output = output .. "Plong"
    end
    if output == "" then
    	output = tostring(n)
    end
  return output
end
