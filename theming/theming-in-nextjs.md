just add a theme-toggle.tsx in components/ui , this is the button basically
then add a theme provider in components/provider/theme-provider.tsx
then go to shadcn and search darkmode 
them install next themes , wrap the root layout with theme-provider.tsx that you made and supresshydration warnings 
import the button anywhere now theme-toggle.tsx in components/ui