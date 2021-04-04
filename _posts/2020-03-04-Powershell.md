---
title: Powershell - RAW
published: true
---

![Powershell](./../assets/PowerShell.jpg)
***Cheatsheet de todo lo aprendido en PowerShell***



### Comandos prácticos de ayuda
Podemos actualizar la ayuda con Update-Help. Para mostrar ejemplos podemos usar este commando Get-Help [Get-Service] -Examples. Si escribimos el comando nos aparece una ventana donde podemos buscar. Más comandos que podemos encontrar son:
```powershell
Get-Help [comando] # ayuda
Get-Command -Name *[Comando]*
Show-Command Get-Service # (Con formulario, muy bueno)
```

### Comandos prácticos formatear salida
```powershell
Pipe |
Format-*
out-*
Get-Process -Name *notepad* | Stop-Process
Get-Service | more
Get-Service | Where-Object {$_.Status -eq "Running"} | more
Get-Command -Verb Format # (Formatear salida)
Get-Service | Format-Table * | more # (muchas mas cosas)
Get-ChildItem | more (alias dir)
Get-ChildItem | Format-Table * | more # (muchas mas cosas)
Get-ChildItem | Format-Table Name,Length | more # (Filtrar por atributos)
Get-ChildItem | Format-List * | more # (Formato lista muy interesante pantallas pequeñas)
Get-Command -Verb Out
Get-Process | out-gridview #~(muy interesante permite filtros)
Get-Process | Out-File -FilePath C:\Users\ericramos\Desktop\prueba.txt (a archivo)
Out-Null # (desaparecer salida de comando)
```

### Operadores

```powershell
Sumas,restas,etc (+,-,%,*)
# Asignación con dolar -> $var = 5
+= Incrementar
-= Decrementar
Comparar
3 -eq 4(igual)
3 -lt 4(menor que)
3 -gt 4(mayor que)
Contenido
"Shell" -in "Power","Shell","curso"
4 -in 3,4,5,6
"curso de powershell" -match "Power"
"curso de powershell" -replace "powershell", "pentesting"
# Redirección
# "Esta es la primera frase" > frases.txt
# "Esta es la segunda frase" >> frases.txt es igual a "Esta es la tercera frase" | out-file -Filepath .\frases.txt -Append
# notepad archivo -> te lo abre
Get-Process NOEXISTE 2> Noexiste.txt
Get-Help Operators # (ficheros con help)
Get-Help about_Arithmetic_Operators
```

### Operadores avanzados

```powershell
-and -or -xor -not !
-split -join
-is -isnot -as
(3 -le 4) -and (5 -eq 7) # (dos condiciones)
(3 -le 4) -or (5 -eq 7)  # (solo una)
(3 -le 4) -xor (5 -eq 7) # (solo cuando una sea cierta)
"este es un curso de pentesting" -split " " # (separar)
"este es un curso de pentesting","prueba " -join " " # (unir)
"este es un curso","de pentesting" -join " de " # (unir)
3 -is "int" (saber tipo"
3 -is "float"
"hola" -is "string"
"3" + 4 (34 concatena)
4 + "3" (suma)
" hola " + " mundo " (concatena)
0x12 (hace conversión a decimal)
0x12 -as "int"
```

### Tipos
```powershell
$valor = "casa"
"Esta es mi valor $valor" # (sustituye valor)
'Esta es mi valor $valor' # (no sustituye)
```

### Arrays
```powershell
$variable = 3.2 + 5
$variable.GetType() # (Saber tipo)
[int]$variable # (convertir variable a otro tipo)
[int]$variable2 = 4.2 + 8.4 # (toma valor entero redondea)
$servicios = Get-Service
$servicios[0] # (sacar primer elemento)
$servicios.Length # (longitud del array)
$servicios.GetType() # (tipo de elemento)
$Lista = 1,2,3,4,5 # (crear array)
$lista = 1, "gola", 3
$a = @() # (crear un array vacio)
```

### Sentencias condicionales
```powershell
if,elseif,else
if($Variable -gt 7){
"hola"
}elseif($variable -lt 9){
}else{
}
.ps1 (EXTENSIONNN)
Set-ExecutionPolicy Unrestricted
switch(soporta -Exact -Wildcard -Regex) # incluso procesar archivos con -file
$dias = "miercoles"
switch($dias){
"lunes"{"hoy es lunes"}
"martes"{"hoy es martes"}
Default{"pringao"}
}
WILDCARD CON PATRONES
$dias = "sloja"
switch -Wildcard ($dias){
"a*"{"hoy es lunes"}
"b*"{"hoy es martes"}
Default{"pringao"}
}
# Buscar las lineas que tienen lo que nos interesa
switch -Regex -File C:\Users\ericramos\Desktop\prueba.txt{
"Alerta" {$_}
}
switch -Regex -File C:\Users\ericramos\Desktop\prueba.txt{
"Alerta" {$_ >> C:\Users\ericramos\Desktop\suso.txt}
}
```

### Bucles
```powershell
while(){}
do{} while()
do{} until()
for(;;){}
foreach(in){}
$contador = 5
while($contador -gt 1){
"Se ha ejecutado $contador veces"
$contador--
}
$contador = 5
do{
"Se ha ejecutado $contador veces"
$contador--
}while($contador -gt 1)
$procesos = Get-Process
foreach($process in $procesos){
"El nombre del proceso es " + $process.Name
}
SUPER UTILL
Get-Process | ForEach-Object {$_.Name}
```

### Scripting
```powershell
Get-Help about_execution_policies
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSign
```

### Funciones 
```powershell
function Obtener-Proceso {
$procesos = Get-Process
foreach($process in $procesos){
"El nombre del proceso es " + $process.Name
}
}
Obtener-Proceso
PASANDO ARGS
function Obtener-Parametros {
"Los parametros que has pasado son " + $args
}
Obtener-Parametros 1 2 3 Hola
function Obtener-Parametros {
"Los parametros que has pasado son " + $args
"El primer parametro es " + $args[0]
}
Obtener-Parametros 1 2 3 Hola
Recurriendo parametros
function Obtener-Parametros {
"Los parametros que has pasado son " + $args
foreach($i in $args){
"Los parametros son " + $args[$i]
}
}
Obtener-Parametros 1 2 3 Hola
Obteniendo parametritos
function Obtener-Parametros($parametro1,$parametro2){
"Los parametros que has pasado son " + $parametro1 + " y " + $parametro2
}
Obtener-Parametros 1 2
function Obtener-Parametros($parametro1,$parametro2){
"Los parametros que has pasado son " + $parametro1 + " y " + $parametro2
}
Obtener-Parametros -parametro1 1 -parametro2 2
```


### Parametros funciones 
```powershell
El tercer parametro
function mostrar-parametro ($parametro1,$parametro2){
"Los parametros son $parametro1 y $parametro2"
}
mostrar-parametro 1 2 "Valencia"
function mostrar-parametro ($parametro1,$parametro2){
"Los parametros son $parametro1 y $parametro2"
"Los parametros adicionales son $args"
}
mostrar-parametro 1 2 "Valencia"
function Sumar-Params([int]$para1, [int]$para2){
$para1 + $para2
}
Sumar-Params 1 2
function Sumar-Params([int]$para1, [int]$para2){
$suma = $para1 + $para2
$suma
}
Sumar-Params 1 "2"
Valor por defecto
function Sumar-Params([int]$para1=5, [int]$para2){
$suma = $para1 + $para2
$suma
}
Sumar-Params -para2 "2"
function Sumar-Params([int]$para1=5, [int]$para2=3){
$suma = $para1 + $para2
$suma
}
Sumar-Params
```


### Variables y funciones
```powershell
function Intercambiar-Parametro($a, $b, [switch]$c){
$a + $b
if($c){
$a - $b
}
}
Intercambiar-Parametro 2 3
function Intercambiar-Parametro($a, $b, [switch]$c){
$a + $b
if($c){
$a - $b
}
}
Intercambiar-Parametro 2 3 -c
function Function1 ($var = 1){
"La variable vale $var"
}
function Function2 ($var = 2){
"La variable vale $var"
}
Function1
Function2
Contextos son de funciones
function Function1 ($var = 1){
"La variable vale $var"
}
function Function2 ($var = 2){
"La variable vale $var"
}
$var = 3
"la variable aqui vale $var"
Function1
Function2
cd Function:
```


### Funciones avanzadas 
```powershell
function Ver-Eventos{
[CmdletBinding()]
Param(
$NombreLog,
$IdenEvento
)
Get-EventLog -LogName $NombreLog | Where-Object {$_.EventID -eq $IdenEvento} | Select-Object -First 10
}
Ver-Eventos -NombreLog Security -IdenEvento 4624
function Ver-Eventos{
[CmdletBinding()]
Param(
[Parameter(Mandatory = $true)]
$NombreLog,
$IdenEvento
)
Get-EventLog -LogName $NombreLog | Where-Object {$_.EventID -eq $IdenEvento} | Select-Object -First 10
}
function Ver-Eventos{
[CmdletBinding()]
Param(
[Parameter(Mandatory = $true)]
$NombreLog,
$IdenEvento=4624
)
Get-EventLog -LogName $NombreLog | Where-Object {$_.EventID -eq $IdenEvento} | Select-Object -First 10
}
Ver-Eventos -NombreLog Security
Ver-Eventos -IdenEvento 1001
VALIDARR SET
function Ver-Eventos{
[CmdletBinding()]
Param(
[Parameter(Mandatory = $true)]
[ValidateSet("Security","Application")]
$NombreLog,
$IdenEvento=4624
)
Get-EventLog -LogName $NombreLog | Where-Object {$_.EventID -eq $IdenEvento} | Select-Object -First 10
}
Ver-Eventos -NombreLog Suys
PipeLineeeee
function Ver-Eventos{
[CmdletBinding()]
Param(
[Parameter(Mandatory = $true,ValueFromPipeLine =$true)]
[ValidateSet("Security","Application")]
$NombreLog,
$IdenEvento=4624
)
Get-EventLog -LogName $NombreLog | Where-Object {$_.EventID -eq $IdenEvento} | Select-Object -First 10
}
"Application" | Ver-Eventos -NombreLog Suys
```


### Scripts avanzados
```powershell
cargar scripts en powershell
Dot source -> . ./script15.ps1 # (Te lo carga en ambito de powershell)
```

### Comandos más usados
```powershell
get-alias -Definition get-content
ni -> cre archivo
Alias like a pro
Remove-Item alias:\usuarios
New-Alias -name usuario Get-LocalUser
Get-LocalUser
Get-LocalUser -Name ERIC| fl
Get-LocalGroup
Get-LocalGroup -Name Administradores | fl *
Get-SmbShare -> net share
Get-Disk -Number 0
Get-Partition
Get-NetAdapter
Get-Process
Get-Process | Out-GridView
Get-Service
Get-ScheduledTask | Where-Object {$_.State -eq “Running”}
Get-ScheduledTask -TaskName reboot*
(Get-ScheduledTask | Where-Object {$_.TaskName -eq “DCU”}).Triggers
Get-Printer
Get-PrinterDriver
Get-EventLog -list -> eventos
Get-WinEvent -listlog *
Get-WinEvent -listlog * |Where-Object {$_.Recordcount -gt 0}
Get-WmiObject -ClassName win32_processor|fl
```
