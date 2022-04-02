#ifndef ZFRACTION_H_INCLUDED
#define ZFRACTION_H_INCLUDED

class Zfraction
{
    public:

    Zfraction(int numerateur = 0, int denominateur = 1);
    void afficher(std::ostream &flux) const;
    Zfraction& operator+=(Zfraction const& z);
    Zfraction& operator*=(Zfraction const& b);
    bool estPlusGrandQue(Zfraction const& b) const;
    bool estEgal(Zfraction const& b) const;

    private:

    int m_numerateur;
    int m_denominateur;
};

std::ostream& operator<<(std::ostream &flux, Zfraction const& zfraction);
Zfraction operator+(Zfraction const& a, Zfraction const& b);
Zfraction operator*(Zfraction const& a, Zfraction const& b);
bool operator>(Zfraction const& a, Zfraction const& b);
bool operator==(Zfraction const& a, Zfraction const& b);

#endif // ZFRACTION_H_INCLUDED
