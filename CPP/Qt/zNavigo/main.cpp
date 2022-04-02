#include <QApplication>
#include <QWidget>

int main(int argc, char* argv[])
{
    QApplication app(argc, argv);

    QWidget fenetre;
    fenetre.show();

    return app.exec();
}
