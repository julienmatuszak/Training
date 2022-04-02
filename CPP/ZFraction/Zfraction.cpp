#include <iostream>
#include "Zfraction.h"

using namespace std;

Zfraction::Zfraction(int numerateur, int denominateur)
    : m_numerateur(numerateur), m_denominateur(denominateur)
{
    int i(0);
    for(i=2; i <= m_denominateur; i++)
    {
            if (m_numerateur%i==0 && m_denominateur%i==0)
            {
                do
                {
                    m_numerateur /= i;
                    m_denominateur /= i;
                } while(m_numerateur%i==0 && m_denominateur%i==0);
            }
    }
}

void Zfraction::afficher(ostream& flux) const
{
    if (m_denominateur == 1)
        flux << m_numerateur;
    else
        flux << m_numerateur << "/" << m_denominateur;
}

Zfraction& Zfraction::operator+=(Zfraction const& b)
{
    if (m_denominateur != b.m_denominateur)
    {
        if(m_denominateur > b.m_denominateur)
        {
            m_numerateur = m_numerateur + b.m_numerateur*m_denominateur;
        }
        else
        {
            m_denominateur = b.m_denominateur;
            m_numerateur = b.m_numerateur + m_numerateur*b.m_denominateur;
        }
    }
    else
    {
        m_numerateur = m_numerateur + b.m_numerateur;
    }

    return *this;
}

Zfraction& Zfraction::operator*=(Zfraction const& b)
{
    m_denominateur *= b.m_denominateur;
    m_numerateur *= b.m_numerateur;

    return *this;
}

bool Zfraction::estPlusGrandQue(Zfraction const& b) const
{
    if (m_denominateur == b.m_denominateur && m_numerateur > b.m_numerateur)
        return true;
    else if (m_denominateur > b.m_denominateur && m_numerateur > b.m_numerateur*m_denominateur)
        return true;
    else if (b.m_denominateur > m_denominateur && m_numerateur*b.m_denominateur > b.m_numerateur)
        return true;
    else
        return false;
}

bool Zfraction::estEgal(Zfraction const& b) const
{
    if (m_denominateur == b.m_denominateur && m_numerateur == b.m_numerateur)
        return true;
    else if (m_denominateur > b.m_denominateur && m_numerateur == b.m_numerateur*m_denominateur)
        return true;
    else if (b.m_denominateur > m_denominateur && m_numerateur*b.m_denominateur == b.m_numerateur)
        return true;
    else
        return false;
}


//OPERATEURS

ostream& operator<<(ostream &flux, Zfraction const& zfraction)
{
    zfraction.afficher(flux);
    return flux;
}

Zfraction operator+(Zfraction const& a, Zfraction const& b)
{
    Zfraction c(a);
    c += b;
    return c;
}

Zfraction operator*(Zfraction const& a, Zfraction const& b)
{
    Zfraction c(a);
    c *= b;
    return c;
}

bool operator>(Zfraction const &a, Zfraction const& b)
{
    if(a.estPlusGrandQue(b))
        return true;
    else
        return false;
}

bool operator==(Zfraction const& a, Zfraction const& b)
{
    return a.estEgal(b);
}
