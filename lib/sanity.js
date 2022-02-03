import sanityClient from '@sanity/client'

export const client = sanityClient ({
    projectId: 'fp5nmlal',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skAVwAfw3Fhfanh5EjdqnUqAcRbkGDZYr66Jl8svg8vFsz8O5WSplxNxuTvVt0gTHGdtgOIZ6SoJnlfM3VIh6uBesnqcliEXE67Phtj6kLZYyyccMXLmvzs05KXVNGRbxLdYIQEob7yKEHk04YhOVBiZdBSFC7KDcplptiTCZbPQBWBZtdFV',
    useCdn: false,
})