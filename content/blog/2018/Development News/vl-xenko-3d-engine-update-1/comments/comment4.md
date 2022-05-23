---
user: "tonfilm"
created: "1540829512"
---

@sebescudie yes, for now there is a fixed white material loaded for all basic primitives. that's what the color input is for.

for different materials you would use a more advanced version of the box with a material input pin. but you rarely need basic primitives with fancy materials. i think you would rather want prepare more advanced models and materials in xenkos game studio and load that as a whole package, for example as a prefab.

so, as an advanced user you would build your own custom entities and add the components that you need for that specific entity (model, material, physics, audio etc.). the predefined entities are rather for quick drafts and act as a kind of template for more complex custom entities.
