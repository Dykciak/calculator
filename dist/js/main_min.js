var de,ac,dot,divide,seven,eight,nine,multiply,four,five,six,subtract,one,two,three,add,doubleZero,zero,equal,displayInput,main=function(){prepareDOMElements(),prepareDOMEvents()},prepareDOMElements=function(){ac=document.querySelector(".clear"),de=document.querySelector(".delete"),dot=document.querySelector(".dot"),divide=document.querySelector(".divide"),seven=document.querySelector(".seven"),eight=document.querySelector(".eight"),nine=document.querySelector(".nine"),multiply=document.querySelector(".multiply"),four=document.querySelector(".four"),five=document.querySelector(".five"),six=document.querySelector(".six"),subtract=document.querySelector(".subtract"),one=document.querySelector(".one"),two=document.querySelector(".two"),three=document.querySelector(".three"),add=document.querySelector(".add"),doubleZero=document.querySelector(".doubleZero"),zero=document.querySelector(".zero"),equal=document.querySelector("#equal"),displayInput=document.querySelector(".display-input"),display=document.querySelector('input[name="display"]')},prepareDOMEvents=function(){ac.addEventListener("click",function(){return display.value=""}),de.addEventListener("click",function(){display.value=display.value.toString().slice(0,-1)}),dot.addEventListener("click",function(){return appendValue(".")}),divide.addEventListener("click",function(){return appendValue("/")}),seven.addEventListener("click",function(){return appendValue("7")}),eight.addEventListener("click",function(){return appendValue("8")}),nine.addEventListener("click",function(){return appendValue("9")}),multiply.addEventListener("click",function(){return appendValue("*")}),four.addEventListener("click",function(){return appendValue("4")}),five.addEventListener("click",function(){return appendValue("5")}),six.addEventListener("click",function(){return appendValue("6")}),subtract.addEventListener("click",function(){return appendValue("-")}),one.addEventListener("click",function(){return appendValue("1")}),two.addEventListener("click",function(){return appendValue("2")}),three.addEventListener("click",function(){return appendValue("3")}),add.addEventListener("click",function(){return appendValue("+")}),doubleZero.addEventListener("click",function(){return appendValue("00")}),zero.addEventListener("click",function(){return appendValue("0")}),equal.addEventListener("click",function(){calculate()}),document.addEventListener("keydown",handleKeyboardInput)},handleKeyboardInput=function(e){var n=e.key;isNaN(n)&&"."!==n?"Backspace"===n?display.value=display.value.toString().slice(0,-1):"Enter"===n?(e.preventDefault(),calculate()):"="===n?calculate():"+"===n||"-"===n||"*"===n||"/"===n?appendValue(n):"Escape"===n&&(display.value=""):appendValue(n)},appendValue=function(e){display.value+=e};function validateExpression(e){return/^(\d+(\.\d+)?)([+\-*/]\d+(\.\d+)?)*$/.test(e)}function calculate(){var expression=display.value;if(validateExpression(expression))try{display.value=eval(expression)}catch(e){display.value="Nieprawidłowe działanie"}else display.value="Nieprawidłowe działanie"}document.addEventListener("DOMContentLoaded",main);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGUiLCJhYyIsImRvdCIsImRpdmlkZSIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwibXVsdGlwbHkiLCJmb3VyIiwiZml2ZSIsInNpeCIsInN1YnRyYWN0Iiwib25lIiwidHdvIiwidGhyZWUiLCJhZGQiLCJkb3VibGVaZXJvIiwiemVybyIsImRpc3BsYXlJbnB1dCIsInByZXBhcmVET01FbGVtZW50cyIsIm1haW4iLCJwcmVwYXJlRE9NRXZlbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXF1YWwiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwidG9TdHJpbmciLCJzbGljZSIsImFwcGVuZFZhbHVlIiwiY2FsY3VsYXRlIiwiaGFuZGxlS2V5Ym9hcmRJbnB1dCIsImV2ZW50Iiwia2V5IiwiaXNOYU4iLCJwcmV2ZW50RGVmYXVsdCIsInRlc3QiLCJleHByZXNzaW9uIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsR0FDQUMsR0FEQUQsSUFDQUMsT0FDQUMsTUFDQUMsTUFDQUMsS0FDQUMsU0FDQUMsS0FDQUMsS0FDQUMsSUFDQUMsU0FDQUMsSUFDQUMsSUFDQUMsTUFDQUMsSUFDQUMsV0FDQUMsS0FDQUMsTUFDQUMsYUFFQUMsS0FBQUEsV0FFSkMsbUJBQU1DLEVBRUxDLGlCQURBRixDQUVELEVBRU1BLG1CQUFxQixXQUMxQmxCLEdBQUVxQixTQUFXQyxjQUFjLFFBQUMsRUFDNUJ2QixHQUFFc0IsU0FBV0MsY0FBYyxTQUFDLEVBQzVCckIsSUFBR29CLFNBQVdDLGNBQWMsTUFBQyxFQUM3QnBCLE9BQU1tQixTQUFXQyxjQUFjLFNBQUMsRUFDaENuQixNQUFLa0IsU0FBV0MsY0FBYyxRQUFDLEVBQy9CbEIsTUFBS2lCLFNBQVdDLGNBQWMsUUFBQyxFQUMvQmpCLEtBQUlnQixTQUFXQyxjQUFjLE9BQUMsRUFDOUJoQixTQUFRZSxTQUFXQyxjQUFjLFdBQUMsRUFDbENmLEtBQUljLFNB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QUFBLE1BQUFBLEdBQUEsTUFBQUEsR0FBQSxNQUFBQSxFQUNyRHJCLFlBQUlhLENBQUFBLEVBQWdDSSxXQUFBQSxJQUFnQkwsUUFBQ0UsTUFBQSxJQUhyRGpCLFlBQUlnQixDQUFBQSxDQThCTCxFQXpCS0EsWUFBQUEsU0FBQUEsR0E0QkpELFFBNUI4QkUsT0FBTUcsQ0E2QnJDLEVBQ0EsU0E3QkNkLG1CQUFXVSxHQStCWCxNQS9CMkNJLHVDQUFrQk8sS0FBQUMsQ0FBQSxDQWdDOUQsQ0FFQSxTQWpDdURQLFlBa0N0RCxJQWpDS08sV0FBQ1osUUFBaUJDLE1Ba0N2QixHQWpDQ0ksbUJBQVdPLFVBQUEsRUFDWixJQUNBaEIsUUFBU0ksTUFBQUEsS0FBQUEsVUFBaUIsQ0FJMUIsQ0FIQSxNQUFBYSxHQUVEZCxRQUFNTyxNQUFBQSx5QkFDTCxNQWtDQ1AsUUFoQ0FLLE1BQVlJLHlCQWtDZCxDQVVBWixTQWhDQ0ksaUJBQUEsbUJBQUFOLElBQUEiLCJmaWxlIjoibWFpbl9taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGU7XG5sZXQgYWM7XG5sZXQgZG90O1xubGV0IGRpdmlkZTtcbmxldCBzZXZlbjtcbmxldCBlaWdodDtcbmxldCBuaW5lO1xubGV0IG11bHRpcGx5O1xubGV0IGZvdXI7XG5sZXQgZml2ZTtcbmxldCBzaXg7XG5sZXQgc3VidHJhY3Q7XG5sZXQgb25lO1xubGV0IHR3bztcbmxldCB0aHJlZTtcbmxldCBhZGQ7XG5sZXQgZG91YmxlWmVybztcbmxldCB6ZXJvO1xubGV0IGVxdWFsO1xubGV0IGRpc3BsYXlJbnB1dDtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcblx0cHJlcGFyZURPTUVsZW1lbnRzKCk7XG5cdHByZXBhcmVET01FdmVudHMoKTtcbn07XG5cbmNvbnN0IHByZXBhcmVET01FbGVtZW50cyA9ICgpID0+IHtcblx0YWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyXCIpO1xuXHRkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuXHRkb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvdFwiKTtcblx0ZGl2aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXZpZGVcIik7XG5cdHNldmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXZlblwiKTtcblx0ZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVpZ2h0XCIpO1xuXHRuaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaW5lXCIpO1xuXHRtdWx0aXBseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXVsdGlwbHlcIik7XG5cdGZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvdXJcIik7XG5cdGZpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpdmVcIik7XG5cdHNpeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l4XCIpO1xuXHRzdWJ0cmFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VidHJhY3RcIik7XG5cdG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lXCIpO1xuXHR0d28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3b1wiKTtcblx0dGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRocmVlXCIpO1xuXHRhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcblx0ZG91YmxlWmVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG91YmxlWmVyb1wiKTtcblx0emVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuemVyb1wiKTtcblx0ZXF1YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VxdWFsXCIpO1xuXHRkaXNwbGF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktaW5wdXRcIik7XG5cdGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGlzcGxheVwiXScpO1xufTtcblxuY29uc3QgcHJlcGFyZURPTUV2ZW50cyA9ICgpID0+IHtcblx0YWMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IChkaXNwbGF5LnZhbHVlID0gXCJcIikpO1xuXHRkZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGRpc3BsYXkudmFsdWUgPSBkaXNwbGF5LnZhbHVlLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpO1xuXHR9KTtcblx0ZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhcHBlbmRWYWx1ZShcIi5cIikpO1xuXHRkaXZpZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFwcGVuZFZhbHVlKFwiL1wiKSk7XG5cdHNldmVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhcHBlbmRWYWx1ZShcIjdcIikpO1xuXHRlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYXBwZW5kVmFsdWUoXCI4XCIpKTtcblx0bmluZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYXBwZW5kVmFsdWUoXCI5XCIpKTtcblx0bXVsdGlwbHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFwcGVuZFZhbHVlKFwiKlwiKSk7XG5cdGZvdXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFwcGVuZFZhbHVlKFwiNFwiKSk7XG5cdGZpdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFwcGVuZFZhbHVlKFwiNVwiKSk7XG5cdHNpeC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYXBwZW5kVmFsdWUoXCI2XCIpKTtcblx0c3VidHJhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFwcGVuZFZhbHVlKFwiLVwiKSk7XG5cdG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYXBwZW5kVmFsdWUoXCIxXCIpKTtcblx0dHdvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhcHBlbmRWYWx1ZShcIjJcIikpO1xuXHR0aHJlZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYXBwZW5kVmFsdWUoXCIzXCIpKTtcblx0YWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhcHBlbmRWYWx1ZShcIitcIikpO1xuXHRkb3VibGVaZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhcHBlbmRWYWx1ZShcIjAwXCIpKTtcblx0emVyby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYXBwZW5kVmFsdWUoXCIwXCIpKTtcblx0ZXF1YWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjYWxjdWxhdGUoKTtcblx0fSk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleWJvYXJkSW5wdXQpO1xufTtcblxuY29uc3QgaGFuZGxlS2V5Ym9hcmRJbnB1dCA9IChldmVudCkgPT4ge1xuXHRjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cdGlmICghaXNOYU4oa2V5KSB8fCBrZXkgPT09IFwiLlwiKSB7XG5cdFx0YXBwZW5kVmFsdWUoa2V5KTtcblx0fSBlbHNlIGlmIChrZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcblx0XHRkaXNwbGF5LnZhbHVlID0gZGlzcGxheS52YWx1ZS50b1N0cmluZygpLnNsaWNlKDAsIC0xKTtcblx0fSBlbHNlIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y2FsY3VsYXRlKCk7XG5cdH0gZWxzZSBpZiAoa2V5ID09PSBcIj1cIikge1xuXHRcdGNhbGN1bGF0ZSgpO1xuXHR9IGVsc2UgaWYgKGtleSA9PT0gXCIrXCIgfHwga2V5ID09PSBcIi1cIiB8fCBrZXkgPT09IFwiKlwiIHx8IGtleSA9PT0gXCIvXCIpIHtcblx0XHRhcHBlbmRWYWx1ZShrZXkpO1xuXHR9IGVsc2UgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuXHRcdGRpc3BsYXkudmFsdWUgPSBcIlwiO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRkaXNwbGF5LnZhbHVlICs9IHZhbHVlO1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG5cdGNvbnN0IHJlZ2V4ID0gL14oXFxkKyhcXC5cXGQrKT8pKFsrXFwtKi9dXFxkKyhcXC5cXGQrKT8pKiQvO1xuXHRyZXR1cm4gcmVnZXgudGVzdChleHByZXNzaW9uKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlKCkge1xuXHRjb25zdCBleHByZXNzaW9uID0gZGlzcGxheS52YWx1ZTtcblx0aWYgKHZhbGlkYXRlRXhwcmVzc2lvbihleHByZXNzaW9uKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRkaXNwbGF5LnZhbHVlID0gZXZhbChleHByZXNzaW9uKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRkaXNwbGF5LnZhbHVlID0gXCJOaWVwcmF3aWTFgm93ZSBkemlhxYJhbmllXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXkudmFsdWUgPSBcIk5pZXByYXdpZMWCb3dlIGR6aWHFgmFuaWVcIjtcblx0fVxufVxuXG4vLyBmdW5jdGlvbiBjYWxjdWxhdGUyKCkge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIGRpc3BsYXkudmFsdWUgPSBldmFsKGRpc3BsYXkudmFsdWUpO1xuLy8gICAgIH0gY2F0Y2ggKGUpIHtcbi8vICAgICAgICAgYWxlcnQoJ0ludmFsaWQgRXhwcmVzc2lvbicpO1xuLy8gICAgIH1cbi8vIH1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG4iXX0=
