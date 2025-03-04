import { supabase } from './supabase';

// Fonction pour ajouter un utilisateur
export async function addUser(name, email) {
    const { data, error } = await supabase
        .from('users')  // Nom de la table dans Supabase
        .insert([{ name, email }]);

    if (error) {
        console.error('❌ Erreur lors de l’insertion :', error);
    } else {
        console.log('✅ Utilisateur ajouté !', data);
    }
}
