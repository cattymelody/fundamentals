monoskeldir=$(pkglibdir)
monoskel_SCRIPTS = monoskel.exe
EXTRA_DIST = $(monoskel_sources) $(monoskel_sources_in)
CLEANFILES = monoskel.exe

monoskel_sources_in = AssemblyInfo.cs.in
monoskel_generated_sources = $(monoskel_sources_in:.in=)
monoskel_sources = main.cs

monoskel_build_sources = $(addprefix $(srcdir)/, $(monoskel_sources))
monoskel_build_sources += $(monoskel_generated_sources)
resources = $(srcdir)/../resources/dummy.txt

embedded= $(foreach res,$(resources), $(addprefix -resource:,$(res)),$(notdir $(res)))

monoskel.exe: $(monoskel_build_sources) $(resources)
	$(MCS) $(GTKSHARP_LIBS) $(embedded) -out:$@ $< 

