import javax.swing.*;
public class teste extends JApplet {
public String rTeclaCaps(){
String texto = "";
java.awt.Toolkit t = java.awt.Toolkit.getDefaultToolkit();
if(t.getLockingKeyState(KeyEvent.VK_CAPS_LOCK) == true){
texto = "Ativado"
} else {
texto = "";
}
return texto;
}
public String rTeclaNum(){
String texto = "";
java.awt.Toolkit t = java.awt.Toolkit.getDefaultToolkit();
if(t.getLockingKeyState(KeyEvent.VK_CAPS_LOCK) == true){
texto = "Ativado"
} else {
texto = "";
}
return texto;
}
public String rTeclaScroll(){
String texto = "";
java.awt.Toolkit t = java.awt.Toolkit.getDefaultToolkit();
if(t.getLockingKeyState(KeyEvent.VK_CAPS_LOCK) == true){
texto = "Ativado"
} else {
texto = "";
}
return texto;
}
}
